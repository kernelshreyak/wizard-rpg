var gdjs;
(function(gdjs2) {
  class DestroyOutsideRuntimeBehavior extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._extraBorder = behaviorData.extraBorder || 0;
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      if (oldBehaviorData.extraBorder !== newBehaviorData.extraBorder) {
        this._extraBorder = newBehaviorData.extraBorder;
      }
      return true;
    }
    doStepPostEvents(runtimeScene) {
      const ow = this.owner.getWidth();
      const oh = this.owner.getHeight();
      const ocx = this.owner.getDrawableX() + this.owner.getCenterX();
      const ocy = this.owner.getDrawableY() + this.owner.getCenterY();
      const layer = runtimeScene.getLayer(this.owner.getLayer());
      const boundingCircleRadius = Math.sqrt(ow * ow + oh * oh) / 2;
      if (ocx + boundingCircleRadius + this._extraBorder < layer.getCameraX() - layer.getCameraWidth() / 2 || ocx - boundingCircleRadius - this._extraBorder > layer.getCameraX() + layer.getCameraWidth() / 2 || ocy + boundingCircleRadius + this._extraBorder < layer.getCameraY() - layer.getCameraHeight() / 2 || ocy - boundingCircleRadius - this._extraBorder > layer.getCameraY() + layer.getCameraHeight() / 2) {
        this.owner.deleteFromScene(runtimeScene);
      }
    }
    setExtraBorder(val) {
      this._extraBorder = val;
    }
    getExtraBorder() {
      return this._extraBorder;
    }
  }
  gdjs2.DestroyOutsideRuntimeBehavior = DestroyOutsideRuntimeBehavior;
  gdjs2.registerBehavior("DestroyOutsideBehavior::DestroyOutside", gdjs2.DestroyOutsideRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=destroyoutsideruntimebehavior.js.map
