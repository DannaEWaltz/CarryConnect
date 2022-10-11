class Ip < ApplicationRecord
    has_many :journeys
    has_many :diaries, through: :journey
    has_many :appointments, through: :journey

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true

    has_secure_password
end
