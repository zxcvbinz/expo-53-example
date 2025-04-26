# Pattern di Sistema

## Architettura del Sistema
L'applicazione segue un'architettura basata su componenti con una chiara separazione di responsabilità:

- **Componenti UI**: Elementi riutilizzabili che formano l'interfaccia utente
- **Logica di Business**: Separata dai componenti UI, gestisce il flusso di dati e le operazioni
- **Gestione dello Stato**: Centralizzata per garantire coerenza nell'applicazione
- **API e Servizi**: Interfacce per comunicazione con risorse esterne

## Decisioni Tecniche Chiave
1. **React Native Reusables** come libreria di componenti principale
2. **NativeWind v4** per lo styling cross-platform
3. **@rn-primitives** (equivalente di radix-ui per React Native) per componenti accessibili
4. **Struttura di file e directory** standardizzata per facilitare la manutenzione

## Pattern di Design in Uso
### Pattern di Composizione dei Componenti
- **asChild**: Permette di sostituire l'elemento radice di un componente con un componente personalizzato
```tsx
<Button asChild>
  <Pressable onPress={() => console.log('Pressed')}>
    <Text>Press me</Text>
  </Pressable>
</Button>
```

### Inoltro dei Ref
- Utilizzo di `React.forwardRef` per accedere ai componenti interni
```tsx
const CustomInput = React.forwardRef<TextInput, TextInputProps>((props, ref) => {
  return <TextInput ref={ref} {...props} />
})
```

### Componenti Composti
- Pattern di componenti composti per costruire interfacce complesse
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant='outline'>
      <Text>Edit Profile</Text>
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button>
          <Text>OK</Text>
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Relazioni tra Componenti
- I componenti seguono un modello gerarchico con componenti di base (Button, Text, Input) utilizzati per costruire componenti più complessi (Card, Dialog, Tabs)
- I componenti condividono stili e comportamenti attraverso utilità comuni
- I componenti sono progettati per essere composti insieme mantenendo l'accessibilità e la coerenza visiva
