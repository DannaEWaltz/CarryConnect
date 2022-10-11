class CreateIp < ActiveRecord::Migration[6.1]
  def change
    create_table :ips do |t|
      t.string :name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
