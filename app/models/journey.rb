class Journey < ApplicationRecord
  belongs_to :ip
  belongs_to :gc
  has_many :diaries, dependent: :destroy
  has_many :appointments, dependent: :destroy
end
