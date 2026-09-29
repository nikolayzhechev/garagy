import { StyleSheet } from 'react-native';

export const colors = {
  background: '#1a1a2e',
  header: '#242444',
  surface: '#2a2a4a',
  primary: '#4fc3f7',
  text: '#ffffff',
  textSecondary: '#a0a0b0',
  alert: '#ff5252',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  secondaryContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  outlinedContainer: {
    borderWidth: 5,
    borderRadius: 15,
    borderColor: 'rgba(219, 217, 217, 0.13)',
    margin: 6,
    padding: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textSecondary,
    marginTop: 30,
    marginBottom: 16,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  picker: {
    height: 50,
  },
  submitBtn: {
    minHeight: 48,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#61b164',
    fontWeight: 'bold',
  },
  baseBtn: {
    minHeight: 48,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#d5d5d5',
  },
  secondaryBtn: {
    minHeight: 28,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#d5d5d5',
  },
  btnTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 800,
  },
  btnFont: {
    fontWeight: 'bold',
    color: '#fff',
  },
  pressed: {
    opacity: 0.75,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondary: {
    backgroundColor: '#e5e7eb',
  },
  secondaryText: {
    color: '#111827',
  },
  danger: {
    backgroundColor: '#dc2626',
  },
  card: {
    backgroundColor: '#1d2a4d',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    width: '100%',
    borderLeftWidth: 4,
  }
});