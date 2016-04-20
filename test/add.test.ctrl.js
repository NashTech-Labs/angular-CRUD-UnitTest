describe('AddCtrl', function() {

    beforeEach(module('rbApp'));
    beforeEach(module('ui.router'));
    var mockScope,mockrootScope,mockState, mockAddFactory, mockLog,mockAddCtrl,mockController;


    beforeEach(inject(function($injector,_$controller_, _$rootScope_, _$state_,_addFactory_, _$log_){
        mockrootScope = _$rootScope_;
        mockScope = mockrootScope.$new();
        mockState = _$state_;
        mockAddFactory = _addFactory_;
        mockLog = _$log_;
        mockController = _$controller_;
        mockAddCtrl = mockController('AddCtrl', {'$scope': mockScope, '$state': mockState, 'addFactory': mockAddFactory, '$log' : mockLog});
    }));

    it("Test: mockAddCtrl exists or not", function() {

        expect(mockAddCtrl).toBeDefined();
    });

    describe('$scope.addEmployee', function() {

        it('should run Successfully', function() {
            spyOn(mockState, 'go');
            mockAddFactory.addFactoryMethod = jasmine.createSpy("addFactoryMethod").and.callFake(function(){
                function Response(){

                }
                Response.prototype.success =function(func){
                    func();
                    return new Response();
                };
                Response.prototype.error =function(func){
                };
                return new Response();
            });
            mockScope.addEmployee();
            expect(mockState.go).toHaveBeenCalledWith('home');

        });

    });
});