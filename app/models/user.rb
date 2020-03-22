class User < ApplicationRecord
    has_many :tasks
    validates :name,        presence: true
    validates :email,       presence: true, format: { with: /\A[a-zA-Z0-9_\#!$%&`'*+\-{|}~^\/=?\.]+@[a-zA-Z0-9][a-zA-Z0-9\.-]+\z/i }
    validates :password,    presence: true

    has_secure_password
end
