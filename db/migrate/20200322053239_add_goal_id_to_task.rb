class AddGoalIdToTask < ActiveRecord::Migration[6.0]
  def change
    add_reference :tasks, :goals, foreign_key: true
  end
end
