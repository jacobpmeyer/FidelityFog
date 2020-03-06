class RemoveUserIdColoumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :user_id
  end
end
