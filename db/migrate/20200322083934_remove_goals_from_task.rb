class RemoveGoalsFromTask < ActiveRecord::Migration[6.0]
  def change
    remove_reference :tasks, :goals, null: false, foreign_key: true
  end
end
