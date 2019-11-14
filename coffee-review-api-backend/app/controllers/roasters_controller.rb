class RoastersController < ApplicationController

  def index
    @roasters = Roaster.all

    render json: @roasters, status: 200
  end

  def show
    @roaster = Roaster.find(params[:id])

    render json: @roaster, status: 200
  end

end
