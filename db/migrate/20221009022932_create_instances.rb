class CreateInstances < ActiveRecord::Migration[6.1]
  def change
    create_table :instances do |t|
      t.integer :date
      t.text :milestone
      t.text :medication
      t.text :test_result
      t.belongs_to :ip, null: false, foreign_key: true
      t.belongs_to :gc, null: false, foreign_key: true

      t.timestamps
    end
  end
end
