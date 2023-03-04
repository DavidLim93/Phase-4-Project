class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
    review = find_review
        if review
            render json: review
        else
            render_not_found_response
        end
    end

    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    def update 
        review = find_review
        if review
            review.update(review_params)
            render json: review
        else
            render_not_found_response
        end
    end

    def destroy
        review = find_review
        if review
            review.destroy
            head :no_content
        else
            render_not_found_response
        end
    end

    private

    def render_not_found_response
        render json: { error: "Game not found" }, status: :not_found
    end

    def find_review
        Review.find_by(id: params[:id])
    end

    def review_params
        params.permit(:title, :description, :score, :game_id)
    end
end
