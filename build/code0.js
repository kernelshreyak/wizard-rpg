gdjs.Main_32SceneCode = {};
gdjs.Main_32SceneCode.GDWizardObjects1= [];
gdjs.Main_32SceneCode.GDWizardObjects2= [];
gdjs.Main_32SceneCode.GDWizardObjects3= [];
gdjs.Main_32SceneCode.GDBlueFloorObjects1= [];
gdjs.Main_32SceneCode.GDBlueFloorObjects2= [];
gdjs.Main_32SceneCode.GDBlueFloorObjects3= [];
gdjs.Main_32SceneCode.GDIndustrialPlatformCenterObjects1= [];
gdjs.Main_32SceneCode.GDIndustrialPlatformCenterObjects2= [];
gdjs.Main_32SceneCode.GDIndustrialPlatformCenterObjects3= [];

gdjs.Main_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Main_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32SceneCode.condition1IsTrue_0 = {val:false};


gdjs.Main_32SceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Main_32SceneCode.eventsList1 = function(runtimeScene) {

};gdjs.Main_32SceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32SceneCode.GDWizardObjects1, gdjs.Main_32SceneCode.GDWizardObjects2);


gdjs.Main_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32SceneCode.GDWizardObjects2.length;i<l;++i) {
    if ( !(gdjs.Main_32SceneCode.GDWizardObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Main_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Main_32SceneCode.GDWizardObjects2[k] = gdjs.Main_32SceneCode.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Main_32SceneCode.GDWizardObjects2.length = k;}if (gdjs.Main_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32SceneCode.GDWizardObjects2 */
{for(var i = 0, len = gdjs.Main_32SceneCode.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Main_32SceneCode.GDWizardObjects2[i].setAnimationName("Idle");
}
}}

}


{

/* Reuse gdjs.Main_32SceneCode.GDWizardObjects1 */

gdjs.Main_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32SceneCode.GDWizardObjects1.length;i<l;++i) {
    if ( gdjs.Main_32SceneCode.GDWizardObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Main_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Main_32SceneCode.GDWizardObjects1[k] = gdjs.Main_32SceneCode.GDWizardObjects1[i];
        ++k;
    }
}
gdjs.Main_32SceneCode.GDWizardObjects1.length = k;}if (gdjs.Main_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32SceneCode.GDWizardObjects1 */
{for(var i = 0, len = gdjs.Main_32SceneCode.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Main_32SceneCode.GDWizardObjects1[i].setAnimationName("Running");
}
}}

}


};gdjs.Main_32SceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_32SceneCode.eventsList0(runtimeScene);
}


{


{
}

}


{


gdjs.Main_32SceneCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Wizard"), gdjs.Main_32SceneCode.GDWizardObjects1);

gdjs.Main_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32SceneCode.GDWizardObjects1.length;i<l;++i) {
    if ( gdjs.Main_32SceneCode.GDWizardObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Main_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Main_32SceneCode.GDWizardObjects1[k] = gdjs.Main_32SceneCode.GDWizardObjects1[i];
        ++k;
    }
}
gdjs.Main_32SceneCode.GDWizardObjects1.length = k;}if (gdjs.Main_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32SceneCode.GDWizardObjects1 */
{for(var i = 0, len = gdjs.Main_32SceneCode.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Main_32SceneCode.GDWizardObjects1[i].setAnimationName("Jumping");
}
}}

}


{


gdjs.Main_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Main_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Wizard"), gdjs.Main_32SceneCode.GDWizardObjects1);
{for(var i = 0, len = gdjs.Main_32SceneCode.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Main_32SceneCode.GDWizardObjects1[i].flipX(true);
}
}}

}


{


gdjs.Main_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Main_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Wizard"), gdjs.Main_32SceneCode.GDWizardObjects1);
{for(var i = 0, len = gdjs.Main_32SceneCode.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Main_32SceneCode.GDWizardObjects1[i].flipX(false);
}
}}

}


{


gdjs.Main_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "RControl");
}if (gdjs.Main_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Wizard"), gdjs.Main_32SceneCode.GDWizardObjects1);
{for(var i = 0, len = gdjs.Main_32SceneCode.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Main_32SceneCode.GDWizardObjects1[i].setAnimationName("Attack1");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Wizard"), gdjs.Main_32SceneCode.GDWizardObjects1);

gdjs.Main_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32SceneCode.GDWizardObjects1.length;i<l;++i) {
    if ( gdjs.Main_32SceneCode.GDWizardObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Main_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Main_32SceneCode.GDWizardObjects1[k] = gdjs.Main_32SceneCode.GDWizardObjects1[i];
        ++k;
    }
}
gdjs.Main_32SceneCode.GDWizardObjects1.length = k;}if (gdjs.Main_32SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Main_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32SceneCode.GDWizardObjects1.length = 0;
gdjs.Main_32SceneCode.GDWizardObjects2.length = 0;
gdjs.Main_32SceneCode.GDWizardObjects3.length = 0;
gdjs.Main_32SceneCode.GDBlueFloorObjects1.length = 0;
gdjs.Main_32SceneCode.GDBlueFloorObjects2.length = 0;
gdjs.Main_32SceneCode.GDBlueFloorObjects3.length = 0;
gdjs.Main_32SceneCode.GDIndustrialPlatformCenterObjects1.length = 0;
gdjs.Main_32SceneCode.GDIndustrialPlatformCenterObjects2.length = 0;
gdjs.Main_32SceneCode.GDIndustrialPlatformCenterObjects3.length = 0;

gdjs.Main_32SceneCode.eventsList3(runtimeScene);
return;

}

gdjs['Main_32SceneCode'] = gdjs.Main_32SceneCode;
