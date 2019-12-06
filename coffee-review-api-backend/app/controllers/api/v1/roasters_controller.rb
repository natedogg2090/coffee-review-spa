class Api::V1::RoastersController < ApplicationController

  def index
    @roasters = Roaster.all

    render json: @roasters, status: 200
  end

  def show
    @roaster = Roaster.find(params[:id])

    render json: @roaster, status: 200
  end

  def create
    @roaster = Roaster.new(roaster_params)

    if @roaster.save
      render json: @roaster, status: 200
    end
  end

  def update
    binding.pry
    @roaster = Roaster.find(params[:id])
    @roaster.update(roaster_params)

    render json: @roaster, status: 200
  end

  def destroy
    @roaster = Roaster.find(params[:id])

    @roaster.delete

    render json: {roasterId: @roaster.id}
  end

  private

  def roaster_params
    params.require(:roaster).permit(:name, :geo)
  end

end
