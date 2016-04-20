describe('AddCtrl', function() {

    beforeEach(module('rbApp'));
    beforeEach(module('ui.router'));
    var mockScope,mockrootScope,mockState, mockAddFactory, mockLog,mockAddCtrl;
    var $controller;

    beforeEach(inject(function($injector,_$controller_, _$rootScope_, _$state_,_addFactory_, _$log_){
        mockrootScope = _$rootScope_;
        mockScope = mockrootScope.$new();
        mockState = _$state_;
        mockAddFactory = _addFactory_;
        mockLog = _$log_;
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        mockAddCtrl = $controller('AddCtrl', {'$scope': mockScope, '$state': mockState, 'addFactory': mockAddFactory, '$log' : mockLog});
    }));

    //'$scope', '$state', 'addFactory', '$log'
    describe('$scope.addEmployee', function() {
        it('should run Successfully', function() {
            spyOn(mockState, 'go');
            mockAddFactory.addFactoryMethod = jasmine.createSpy("addFactoryMethod").and.callFake(function(){
                function Res(){

                }
                Res.prototype.success =function(func){
                    func();
                    return new Res();
                };
                Res.prototype.error =function(func){
                };
                return new Res();
            });
            mockScope.addEmployee();
            expect(mockState.go).toHaveBeenCalledWith('home');

        });

        //
        //it('sets the strength to "weak" if the password length <3 chars', function() {
        //    var $scope = {};
        //    var controller = $controller('PasswordController', { $scope: $scope });
        //    $scope.password = 'a';
        //    $scope.grade();
        //    expect($scope.strength).toEqual('weak');
        //});
        it("Test: mockAddCtrl exists or not", function() {

            expect(mockAddCtrl).toBeDefined();
        });

    });
});