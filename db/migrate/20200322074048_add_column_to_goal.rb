class AddColumnToGoal < ActiveRecord::Migration[6.0]
  def change
    add_column :goals, :active_flag, :boolean, default: true
  end
end
