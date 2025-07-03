import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { router } from 'expo-router';
import { 
  ArrowLeft, 
  Package, 
  RefreshCw, 
  Star, 
  Info, 
  ChevronRight,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function HelpScreen() {
  const handleGoBack = () => {
    router.back();
  };

  const handleContactWhatsApp = () => {
    // Handle WhatsApp contact
  };

  const handleContactPhone = () => {
    // Handle phone contact
  };

  const handleContactEmail = () => {
    // Handle email contact
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header with Background Image */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' }}
          style={styles.headerBackground}
          imageStyle={styles.headerBackgroundImage}
        >
          <View style={styles.headerOverlay}>
            {/* Status Bar */}
            <View style={styles.statusBar}>
              <Text style={styles.timeText}>9:41</Text>
              <View style={styles.statusIcons}>
                <View style={styles.signalBars}>
                  <View style={[styles.bar, styles.bar1]} />
                  <View style={[styles.bar, styles.bar2]} />
                  <View style={[styles.bar, styles.bar3]} />
                  <View style={[styles.bar, styles.bar4]} />
                </View>
                <Text style={styles.wifiText}>📶</Text>
                <View style={styles.batteryContainer}>
                  <View style={styles.battery}>
                    <View style={styles.batteryFill} />
                  </View>
                </View>
              </View>
            </View>

            {/* Navigation Header */}
            <View style={styles.navigationHeader}>
              <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                <ArrowLeft size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Central de ajuda</Text>
              <View style={styles.placeholder} />
            </View>

            {/* Main Title */}
            <View style={styles.mainTitleContainer}>
              <Text style={styles.mainTitle}>Como podemos te ajudar hoje?</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
              <View style={styles.searchInputContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Buscar"
                  placeholderTextColor="#999999"
                />
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Help Categories */}
        <View style={styles.categoriesContainer}>
          <View style={styles.categoriesGrid}>
            <TouchableOpacity style={styles.categoryCard}>
              <Package size={24} color="#666666" />
              <Text style={styles.categoryTitle}>Pedidos</Text>
              <ChevronRight size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <RefreshCw size={24} color="#666666" />
              <Text style={styles.categoryTitle}>Trocas &{'\n'}Devolução</Text>
              <ChevronRight size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <Star size={24} color="#666666" />
              <Text style={styles.categoryTitle}>Clube das{'\n'}Migas</Text>
              <ChevronRight size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <Info size={24} color="#666666" />
              <Text style={styles.categoryTitle}>Sobre a TR</Text>
              <ChevronRight size={16} color="#CCCCCC" />
            </TouchableOpacity>
          </View>
        </View>

        {/* FAQ Section */}
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Dúvidas frequentes</Text>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Qual o prazo para entrega do pedido?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Quais as formas de pagamento aceitas na TR?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Quando acontecem os lançamentos? E qual o horário?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Os descontos são cumulativos?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>A TR vende no atacado?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.faqItem, { borderBottomWidth: 0 }]}>
            <Text style={styles.faqQuestion}>Em quanto tempo posso usar o meu vale compras?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Não achou o que procurava?</Text>
          <Text style={styles.contactSubtitle}>Entre em contato com a gente e tire suas dúvidas</Text>

          <View style={styles.contactOptions}>
            <TouchableOpacity style={styles.contactOption} onPress={handleContactWhatsApp}>
              <MessageCircle size={24} color="#25D366" />
              <Text style={styles.contactOptionText}>+55 (11) 97187-4403</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactOption} onPress={handleContactPhone}>
              <Phone size={24} color="#666666" />
              <Text style={styles.contactOptionText}>(11) 2537-6038</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactOption} onPress={handleContactEmail}>
              <Mail size={24} color="#666666" />
              <Text style={styles.contactOptionText}>pedidos@thaisrodrigues.com.br</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Indicator */}
        <View style={styles.bottomIndicator}>
          <View style={styles.homeIndicator} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  headerBackground: {
    height: 320,
    width: '100%',
  },
  headerBackgroundImage: {
    resizeMode: 'cover',
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 20,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 10,
  },
  timeText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  bar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  bar1: {
    width: 3,
    height: 4,
  },
  bar2: {
    width: 3,
    height: 6,
  },
  bar3: {
    width: 3,
    height: 8,
  },
  bar4: {
    width: 3,
    height: 10,
  },
  wifiText: {
    fontSize: 15,
    marginLeft: 2,
  },
  batteryContainer: {
    marginLeft: 2,
  },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 2,
    backgroundColor: 'transparent',
  },
  batteryFill: {
    width: '80%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  navigationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  placeholder: {
    width: 34,
  },
  mainTitleContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 30,
  },
  searchContainer: {
    paddingBottom: 25,
  },
  searchInputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  searchInput: {
    fontSize: 16,
    color: '#000000',
  },
  categoriesContainer: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 15,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: (width - 52) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 80,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    flex: 1,
    marginLeft: 12,
    lineHeight: 18,
  },
  faqSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
  },
  faqItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  faqQuestion: {
    fontSize: 15,
    color: '#000000',
    flex: 1,
    lineHeight: 20,
  },
  contactSection: {
    backgroundColor: '#F8F8F8',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 8,
  },
  contactSubtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 18,
  },
  contactOptions: {
    width: '100%',
    gap: 15,
  },
  contactOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  contactOptionText: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
  },
  bottomIndicator: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 3,
  },
});