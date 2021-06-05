
const { towerService } = require('../services');
const { expect } = require('chai');

const assert = require('assert');
describe('Towers listing test', async () => {
    it('should return search result', async() => {
        const  towers = await towerService.list({},10,0,'createdAt');
        expect(towers).to.have.keys('count', 'rows')
        const rows = towers.rows;
        expect(rows).to.be.an('array')
        expect(rows).to.have.lengthOf.above(0);
        expect(rows[0].dataValues).to.have.keys('name', 'allOffices', 'id', 'createdAt', 'floors', 'latitude', 'longitude', 'offices', 'rating', 'updatedAt', 'location')
    });
});

describe('Towers listing test', async () => {
    it('should return search result', () => {
        assert.equal(42, 42);
    });
});