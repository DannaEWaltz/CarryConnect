class CreateGc < ActiveRecord::Migration[6.1]
  def change
    create_table :gcs do |t|
      t.string :name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
