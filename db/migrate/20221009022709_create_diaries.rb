class CreateDiaries < ActiveRecord::Migration[6.1]
  def change
    create_table :diaries do |t|
      t.text :entry
      t.text :comment
      t.belongs_to :instance, null: false, foreign_key: true

      t.timestamps
    end
  end
end
