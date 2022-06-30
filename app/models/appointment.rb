class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates :status, presence: true
end
