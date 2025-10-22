from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


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