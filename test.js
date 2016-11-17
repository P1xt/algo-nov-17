var should = require( 'chai' ).should();
var solutions = require( './solutions.js' );

describe('rideZsoltime', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideZsoltime("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideZsoltime("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideBenGitter', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideBenGitter("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideBenGitter("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideNewBorn', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideNewBorn("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideNewBorn("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideJacksonBates', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideJacksonBates("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideJacksonBates("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideP1xt', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideP1xt("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideP1xt("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideJenovs', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideJenovs("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideJenovs("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideOmegga', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideOmegga("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideOmegga("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideVelenir', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideVelenir("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideVelenir("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('ridekevcomedia', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.ridekevcomedia("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.ridekevcomedia("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('ridejoelpeyton', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.ridejoelpeyton("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.ridejoelpeyton("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('ridealichristensen', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.ridealichristensen("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.ridealichristensen("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideZackWard', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideZackWard("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideZackWard("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideNacla01', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideNacla01("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideNacla01("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideRayBB', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideRayBB("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideRayBB("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideappleJax', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideappleJax("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideappleJax("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideNicksIdeaEngine', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideNicksIdeaEngine("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideNicksIdeaEngine("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideCirych', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideCirych("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideCirych("ABSTAR", "USACO").should.equal("STAY");
  })
})
describe('rideBhavik', function() {
  it('should return GO when passed COMETQ, HVNGAT', function() {
    solutions.rideBhavik("COMETQ", "HVNGAT").should.equal("GO");
  })
  it('should return STAY when passed ABSTAR, USACO', function() {
    solutions.rideBhavik("ABSTAR", "USACO").should.equal("STAY");
  })
})
