class ReviewSerializer < ActiveModel::Serializer
  attributes :title, :description, :score, :game_id

  
end
