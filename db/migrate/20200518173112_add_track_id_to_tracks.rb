class AddTrackIdToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :track_id, :integer, null: false
  end
end
