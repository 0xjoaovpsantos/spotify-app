import styled from 'styled-components/native';
import AppColors from '../../utils/AppColors';

export const Container = styled.View`
  padding: 6px;
  background-color: ${AppColors.backgroundColor};
  border-radius: ${AppColors.borderRadius};
`;

export const Text = styled.Text`
  color: ${AppColors.fontColor};
`;
