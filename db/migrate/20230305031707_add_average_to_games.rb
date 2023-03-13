class AddAverageToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :average_score, :integer, default: 0 
  end
end
