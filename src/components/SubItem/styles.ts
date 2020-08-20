import styled from 'styled-components/native';
import AppColors from '../../utils/AppColors';

export const Container = styled.View`
  background-color: ${AppColors.backgroundScreen};
  border-bottom-color: ${AppColors.borderSubItemColor};
  border-style: solid;
  border-bottom-width: 4px;
  margin-top: 20px;
  padding-bottom: 10px;
  width: 64px;
`;

export const Text = styled.Text`
  color: ${AppColors.fontColor};
  font-size: 16px;
  font-weight: bold;
`;
