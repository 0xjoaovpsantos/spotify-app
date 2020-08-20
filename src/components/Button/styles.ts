import styled from 'styled-components/native';
import AppColors from '../../utils/AppColors';

export const Container = styled.View`
  padding: 6px;
  height: 48px;
  width: 80px;
  margin-top: 20px;
  background-color: ${AppColors.backgroundColor};
  border-radius: ${AppColors.borderRadius};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${AppColors.fontColor};
`;
