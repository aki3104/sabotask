class Task < ApplicationRecord
    belongs_to :user, dependent: :delete
    validates :title, presence: true
    validates :content, presence: true
end
