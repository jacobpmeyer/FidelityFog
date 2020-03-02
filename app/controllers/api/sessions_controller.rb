class Api::SessionsController < ApplicationController

  def create
      @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )
    if @user
      login!(@user)
      render :show
    else
      render json: ['wrong username/passoword combo']
    end
  end

  def destroy
    if current_user 
      logout!
      render json: {}
    else
      render json: ["no user to log out"], status: 404
    end
  end

end
