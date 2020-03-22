class Goal < ApplicationRecord
    belongs_to :user, dependent: :delete
    validates :goal, presence: true
    validates :week, presence: true
end
