class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update]

  def index
    render json: Item.all
  end

  def show
    render json: Item.find(params[:id])
  end

  def create
    item = Item.new(item_params)

    if item.save
      render json: item
    else
      render json: {errors: item.errors}
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: 422
    end
  end

  def destroy
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params 
    params.require(:item).permit(:name, :price, :description, :menu_id)
  end 
end
