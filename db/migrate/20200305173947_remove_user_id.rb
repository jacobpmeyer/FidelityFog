class RemoveUserId < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :artist_id
  end
end
