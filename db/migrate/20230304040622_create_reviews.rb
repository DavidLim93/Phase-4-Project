class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :game_id
      t.string :title
      t.string :description
      t.integer :score

    end
  end
end
