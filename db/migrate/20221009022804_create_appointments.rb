class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.text :summary
      t.text :questions
      t.integer :date
      t.belongs_to :instance, null: false, foreign_key: true

      t.timestamps
    end
  end
end
