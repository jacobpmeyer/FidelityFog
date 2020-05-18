class RemoveColumnFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :track_id, :integer
  end
end
