class Ip < ApplicationRecord
    has_many :instances
    has_many :diaries, through: :instance
    has_many :appointments, through: :instance

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true

    has_secure_password
end
