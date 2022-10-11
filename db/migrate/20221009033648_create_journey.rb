class CreateJourney < ActiveRecord::Migration[6.1]
  def change
    create_table :journeys do |t|
      t.text :milestone
      t.text :medication
      t.text :test_results
      t.belongs_to :ip, null: false, foreign_key: true
      t.belongs_to :gc, null: false, foreign_key: true

      t.timestamps
    end
  end
end
