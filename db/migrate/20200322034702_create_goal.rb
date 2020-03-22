class CreateGoal < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.references :user, foreign_key: true
      t.string :goal
      t.integer :week
    end
  end
end
