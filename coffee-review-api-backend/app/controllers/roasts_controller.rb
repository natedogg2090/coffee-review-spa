class RoastsController < ApplicationController

  def index
    @roasts = Roast.all

    render json: @roasts, status: 200
  end

  def show
    @roast = Roast.find(params[:id])

    render json: @roast, status: 200
  end
end
