import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  addValue,
  subValue,
  mulValue,
  divValue,
  addHundred,
  getJson,
  getCounter,
} from '../reducerConfig/slices/counterSlice';
const ScreenOne = () => {
  console.log('selector', useSelector(getCounter));
  const {value} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addValue());
  };
  const handleSub = () => {
    dispatch(subValue());
  };
  const handleMul = () => {
    dispatch(mulValue());
  };
  const handleDiv = () => {
    dispatch(divValue());
  };
  const handleAddValue = () => {
    dispatch(addHundred(100));
  };

  React.useEffect(() => {
    dispatch(getJson());
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignSelf: 'center'}}>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            {value}
          </Text>
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            {value}
          </Text>
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            {value}
          </Text>
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            {value}
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Button title="Add 1" onPress={handleAdd} />
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Button title="Sub 1" onPress={handleSub} />
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Button title="Mul by 2" onPress={handleMul} />
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Button title="Div by 2" onPress={handleDiv} />
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Button title="Add 100" onPress={handleAddValue} />
        </View>
      </View>
    </View>
  );
};

export default ScreenOne;
