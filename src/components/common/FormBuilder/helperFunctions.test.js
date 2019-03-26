import { pathsFromObject } from './helperFunctions'; 

describe('helper function', () => {

  it('should return the value property of simple object', () => {
    const obj = {
      firstName: {
        value: 'Chris',
        valid: true
      }
    }

    const result = pathsFromObject(obj, 'value');
    const expectedResult = [{
      path: 'firstName',
      value: 'Chris',
      valid: true
    }];
    expect(result).toEqual(expectedResult);
  })

  it('should return the value property for a complex nested object', () => {
    const obj = {
      user: {
        details: {
          avatar: {
            value: {
              color: '#FF0000',
              profileImage: 'https//www.website.com/image.jpg'
            },
            valid: true
          }
        }
      }
    }

    const result = pathsFromObject(obj, 'value');
    const expectedResult = [{
      path: 'user.details.avatar',
      value: {
        color: '#FF0000',
        profileImage: 'https//www.website.com/image.jpg'
      },
      valid: true
    }];

    expect(result).toEqual(expectedResult);

  })
});