class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :artist_name, hull: false
      t.integer :artist_id, null: false, index: { unique: true }
      t.integer :user_id, null: false, index: { unique: true }
      t.text :description

      t.timestamps
    end
  end
end
