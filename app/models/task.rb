class Task < ApplicationRecord
    belongs_to :user, dependent: :delete
    validates :title, presence: true
end
