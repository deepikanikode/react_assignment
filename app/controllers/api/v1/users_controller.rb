module Api
  module V1
    class UsersController < ApplicationController
      # This method is used to get all the users from table users.

      def index
        render json: User.all
      end

      # This method is used to create the user.

      def create
        user = User.create(user_params)
        if user.save
          render json: user
        else
          render json: user.errors, status: :bad
        end
      end

      private

      def user_params
        params.permit(:name, :address, :city, :region, :country, :birthday)
      end
    end
  end
end
