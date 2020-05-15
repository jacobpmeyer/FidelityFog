class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body
      t.integer :user_id, null: false, index: { unique: true }
      t.integer :track_id, null: false, index: { unique: true }

      t.timestamps
    end
  end
end
