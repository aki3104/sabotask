class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.belongs_to :user
      t.string :title, null: false
      t.string :content
      t.datetime :limit

      t.timestamps
    end
  end
end
