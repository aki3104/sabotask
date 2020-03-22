class AddGoalRefToTasks < ActiveRecord::Migration[6.0]
  def change
    add_reference :tasks, :goal, null: false, foreign_key: true
  end
end
