import styled from 'styled-components/native';
import AppColors from '../../utils/AppColors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Square = styled.View`
  flex-direction: row;
  height: 80px;
  width: 80px;
  background-color: ${AppColors.backgroundColor};
`;

export const Description = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  color: ${AppColors.fontColor};
  font-weight: bold;
  font-size: 16px;
`;

export const NumberMusics = styled.Text`
  color: ${AppColors.fontColor};
`;
