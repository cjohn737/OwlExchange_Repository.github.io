from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from models import User
from werkzeug.security import check_password_hash, generate_password_hash  
from flask import session, redirect, url_for                                                                                                                                                                                          
import os

load_dotenv()

app = Flask(__name__, template_folder="templates")
app.secret_key = "your_secret_key_here"

# Database URI from environment variables
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+mysqlconnector://{os.getenv('MYSQL_USER')}:{os.getenv('MYSQL_PASSWORD')}@{os.getenv('MYSQL_HOST')}:{os.getenv('MYSQL_PORT')}/{os.getenv('MYSQL_DATABASE')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Models
class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(255))
    lastname = db.Column(db.String(255))
    username = db.Column(db.String(255), unique=True)
    email = db.Column(db.String(255))
    password = db.Column(db.String(255))
    role = db.Column(db.String(50))
    created_at = db.Column(db.DateTime)

class Item(db.Model):
    __tablename__ = "items"
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer)
    name = db.Column(db.String(255))
    description = db.Column(db.Text)
    item_condition = db.Column(db.String(50))
    listing_type = db.Column(db.String(50))
    price = db.Column(db.Float)

# Routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/auth", methods=["GET"])
def signup_form():
    return render_template("auth/auth.html")

@app.route("/signup", methods=["POST"])
def signup_submit():
    firstname = request.form["firstname"]
    lastname = request.form["lastname"]
    username = request.form["email"]  # create username from email
    email = request.form["email"]
    password = request.form["password"]
    role = request.form["role"]

    try:
        new_user = User(
            firstname=firstname,
            lastname=lastname,
            username=username,
            email=email,
            password=password,
            role=role
        )
        db.session.add(new_user)
        db.session.commit()
        return "Signup successful! <a href='/admin/dashboard'>Go to Sign In</a>"
    except Exception as e:
        return f"An error occurred: {str(e)}. <a href='/auth'>Try again</a>"

@app.route("/signin", methods=["POST"])
def signin_submit():
    username = request.form["username"]
    password = request.form["password"]

    # Admin login
    if username == "admin@admin.com" and password == "AdminAdmin1!":
        users = User.query.all()
        items = Item.query.all()
        return render_template("dashboard/admin_dashboard.html", users=users, items=items)

    # Regular user login
    user = User.query.filter_by(username=username).first()

    if user and check_password_hash(user.password, password):
        session["user_id"] = user.id  # store session ID
        return redirect(url_for("buyer_dashboard"))
    else:
        return "Invalid username or password. <a href='/auth'>Try again</a>"


@app.route("/admin-dashboard")
def admin_dashboard():
    # Protect this route (only for logged-in admins)
    if not session.get("admin_logged_in"):
        return redirect(url_for("signin_page"))
    return render_template("admin-dashboard.html")

@app.route("/buyer_dashboard")
def buyer_dashboard():
    # Check if user is logged in
    if "user_id" not in session:
        return redirect(url_for("signin_submit"))

    # Fetch user info
    user = User.query.get(session["user_id"])
    items = Item.query.filter_by(owner_id=user.id).all()

    return render_template("dashboard/buyer_dashboard.html", user=user, items=items)

@app.route("/about")
def about():
    return render_template("About.html")  

@app.route("/analytics")
def analytics():
    return render_template("Analytics.html")  

@app.route("/browse")
def browse():
    return render_template("Browse.html")    

@app.route("/cart")
def cart():
    return render_template("Cart.html")   

@app.route("/donate")
def donate():
    return render_template("Donate.html")  

@app.route("/exchange")
def exchange():
    return render_template("Exchange.html") 

@app.route("/sell")
def sell():
    return render_template("Sell.html") 

if __name__ == "__main__":
    app.run(debug=True)
